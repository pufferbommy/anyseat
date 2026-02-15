<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import PlaceGrid from "$lib/components/place-grid.svelte";
	import SearchFilter from "$lib/components/search-filter.svelte";
	import type { Place } from "$lib/components/place-card.svelte";
	import type { FilterOptions } from "$lib/components/search-filter.svelte";
	import * as Dialog from "$lib/components/ui/dialog";
	import { Badge } from "$lib/components/ui/badge";

	// Mock data - Replace with your actual data
	const mockPlaces: Place[] = [
		{
			id: "1",
			name: "Coffee Corner",
			type: "cafe",
			description:
				"A cozy cafe with great coffee and comfortable seating for working.",
			rating: 4.5,
			address: "123 Main Street, Downtown",
			features: ["wifi", "power", "quiet", "food"],
			isOpen: true,
			distance: "0.3 mi",
		},
		{
			id: "2",
			name: "City Library",
			type: "library",
			description: "Quiet study spaces with free WiFi and power outlets.",
			rating: 4.8,
			address: "456 Park Avenue",
			features: ["wifi", "power", "quiet"],
			isOpen: true,
			distance: "0.5 mi",
		},
		{
			id: "3",
			name: "WorkHub Coworking",
			type: "coworking",
			description: "Professional coworking space with meeting rooms.",
			rating: 4.3,
			address: "789 Business Blvd",
			features: ["wifi", "power", "parking", "food"],
			isOpen: false,
			distance: "1.2 mi",
		},
		{
			id: "4",
			name: "Riverside Park",
			type: "public-space",
			description: "Outdoor seating with shade and city views.",
			rating: 4.0,
			address: "101 River Walk",
			features: ["outdoor", "wifi"],
			isOpen: true,
			distance: "0.8 mi",
		},
		{
			id: "5",
			name: "The Grind Cafe",
			type: "cafe",
			description: "Artisan coffee and plenty of seating for remote work.",
			rating: 4.6,
			address: "222 Oak Street",
			features: ["wifi", "power", "food", "parking"],
			isOpen: true,
			distance: "0.4 mi",
		},
		{
			id: "6",
			name: "Tech Hub Library",
			type: "library",
			description: "Modern library with tech-focused amenities.",
			rating: 4.7,
			address: "333 Innovation Way",
			features: ["wifi", "power", "quiet"],
			isOpen: true,
			distance: "1.5 mi",
		},
	];

	// State
	let filters = $state<FilterOptions>({
		searchQuery: "",
		selectedTypes: [],
		selectedFeatures: [],
		isOpenOnly: false,
		sortBy: "distance",
	});

	let selectedPlace = $state<Place | null>(null);
	let isDialogOpen = $state(false);

	// Filter and sort places
	let filteredPlaces = $derived(() => {
		let result = [...mockPlaces];

		// Search filter
		if (filters.searchQuery) {
			const query = filters.searchQuery.toLowerCase();
			result = result.filter(
				(p) =>
					p.name.toLowerCase().includes(query) ||
					p.description?.toLowerCase().includes(query) ||
					p.address.toLowerCase().includes(query),
			);
		}

		// Type filter
		if (filters.selectedTypes.length > 0) {
			result = result.filter((p) => filters.selectedTypes.includes(p.type));
		}

		// Feature filter
		if (filters.selectedFeatures.length > 0) {
			result = result.filter((p) =>
				filters.selectedFeatures.every((f) => p.features.includes(f)),
			);
		}

		// Open only filter
		if (filters.isOpenOnly) {
			result = result.filter((p) => p.isOpen);
		}

		// Sort
		result.sort((a, b) => {
			switch (filters.sortBy) {
				case "rating":
					return b.rating - a.rating;
				case "name":
					return a.name.localeCompare(b.name);
				case "distance":
				default:
					return (
						parseFloat(a.distance || "0") - parseFloat(b.distance || "0")
					);
			}
		});

		return result;
	});

	function handlePlaceClick(place: Place) {
		selectedPlace = place;
		isDialogOpen = true;
	}
</script>

<svelte:head>
	<title>AnySeats - Find Work-Friendly Places</title>
</svelte:head>

<div class="min-h-screen bg-background">
	<header class="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
			<h1 class="text-xl font-bold">AnySeats</h1>

			<nav class="flex items-center gap-4">
				<Button variant="ghost" size="sm">
					<span>👤</span>
				</Button>
			</nav>
		</div>
	</header>

	<main class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
		<div class="grid gap-6 lg:grid-cols-[320px_1fr]">
			<aside class="space-y-4">
				<div class="sticky top-20">
					<SearchFilter
						{filters}
						onFilterChange={(newFilters) => (filters = newFilters)}
					/>
				</div>
			</aside>

			<section>
				<PlaceGrid
					places={filteredPlaces()}
					onPlaceClick={handlePlaceClick}
					isLoading={false}
				/>
			</section>
		</div>
	</main>

	<footer class="mt-12 border-t bg-muted/50">
		<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
				<span class="font-semibold">AnySeats</span>
				<p class="text-sm text-muted-foreground">
					© 2024 AnySeats. Find your perfect workspace.
				</p>
			</div>
		</div>
	</footer>
</div>

<Dialog.Root bind:open={isDialogOpen}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>{selectedPlace?.name}</Dialog.Title>
			<Dialog.Description>{selectedPlace?.type}</Dialog.Description>
		</Dialog.Header>

		<div class="space-y-4">
			<div class="aspect-video rounded-lg bg-muted">
				<div class="flex h-full items-center justify-center text-muted-foreground">
					Large Image Placeholder
				</div>
			</div>

			<div class="space-y-2">
				<p class="font-medium">{selectedPlace?.address}</p>
				{#if selectedPlace?.description}
					<p>{selectedPlace.description}</p>
				{/if}
			</div>

			<div>
				<h3 class="mb-2 font-semibold">Features</h3>
				<div class="flex flex-wrap gap-2">
					{#each selectedPlace?.features as feature}
						<Badge variant="outline">
							{feature}
						</Badge>
					{/each}
				</div>
			</div>

			<div class="flex gap-2 pt-4">
				<Button class="flex-1">Get Directions</Button>
				<Button variant="outline" class="flex-1">Save</Button>
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>