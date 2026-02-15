<script lang="ts" module>
	export type PlaceType = "cafe" | "library" | "coworking" | "public-space";

	export interface Place {
		id: string;
		name: string;
		type: PlaceType;
		description?: string;
		rating: number;
		address: string;
		features: string[];
		isOpen: boolean;
		distance?: string;
		imageUrl?: string;
	}

	export interface PlaceCardProps {
		place: Place;
		onClick?: (place: Place) => void;
	}
</script>

<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { cn } from "@/utils";
	import { Button } from "./ui/button";

	let {
		place,
		onClick,
	}: PlaceCardProps = $props();

	function handleClick() {
		onClick?.(place);
	}
</script>

<Card.Root onclick={handleClick} class="overflow-hidden">
	<div class="aspect-video -mt-6 relative px-0">
		{#if place.imageUrl}
			<img
				src={place.imageUrl}
				alt={place.name}
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
		{:else}
			<div class="flex h-full items-center justify-center bg-muted">
				<div class="text-muted-foreground">Image Placeholder</div>
			</div>
		{/if}

		<div
			class="absolute left-2 top-2 rounded-full px-2 py-1 text-xs font-medium {place.isOpen
				? 'bg-green-500 text-white'
				: 'bg-muted text-muted-foreground'}"
		>
			{place.isOpen ? "Open" : "Closed"}
		</div>
	</div>
	<Card.Content>
		<div class="mb-2 flex items-start justify-between gap-2">
			<div class="flex-1">
				<h3 class="font-semibold leading-tight">{place.name}</h3>
				<p class="text-sm text-muted-foreground">{place.type}</p>
			</div>
			<div class="flex items-center gap-1">
					<span>★</span>
				<span class="text-sm font-medium">{place.rating}</span>
			</div>
		</div>

		<p class="mb-3 line-clamp-1 text-sm text-muted-foreground">{place.address}</p>

		{#if place.description}
			<p class="mb-3 line-clamp-2 text-sm">{place.description}</p>
		{/if}

		<div class="mb-3 flex flex-wrap gap-1">
			{#each place.features.slice(0, 3) as feature}
				<Button size="sm" variant="outline">
					{feature}
				</Button>
			{/each}
			{#if place.features.length > 3}
				<Button size="sm" variant="outline">
					+{place.features.length - 3}
				</Button>
			{/if}
		</div>

		<div class="flex items-center justify-between text-sm">
			{#if place.distance}
				<span class="text-muted-foreground">{place.distance}</span>
			{:else}
				<span></span>
			{/if}
			<button class="text-sm font-medium text-primary hover:underline">View Details →</button>
		</div>
	</Card.Content>
</Card.Root>
