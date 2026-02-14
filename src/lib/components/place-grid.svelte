<script lang="ts" module>
	import type { Place } from "./place-card.svelte";

	export interface PlaceGridProps {
		places: Place[];
		favoriteIds?: string[];
		onFavoriteToggle?: (id: string) => void;
		onPlaceClick?: (place: Place) => void;
		isLoading?: boolean;
		emptyMessage?: string;
	}
</script>

<script lang="ts">
	import PlaceCard from "./place-card.svelte";
  import { Button } from "./ui/button";

	let {
		places,
		favoriteIds = [],
		onFavoriteToggle,
		onPlaceClick,
		isLoading = false,
		emptyMessage = "No places found. Try adjusting your filters.",
	}: PlaceGridProps = $props();
</script>

<div class="space-y-4">
	{#if !isLoading}
		<div class="flex items-center justify-between text-sm text-muted-foreground">
			<span>{places.length} place{places.length !== 1 ? "s" : ""} found</span>
		</div>
	{/if}

	{#if isLoading}
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each Array(6) as _, i}
				<div class="animate-pulse rounded-lg border bg-card">
					<div class="aspect-video bg-muted"></div>
					<div class="space-y-3 p-4">
						<div class="h-4 w-2/3 rounded bg-muted"></div>
						<div class="h-3 w-full rounded bg-muted"></div>
						<div class="h-3 w-1/2 rounded bg-muted"></div>
					</div>
				</div>
			{/each}
		</div>
	{:else if places.length === 0}
		<div class="flex flex-col items-center justify-center rounded-lg border bg-card py-16 text-center">
			<div class="mb-4 text-6xl text-muted-foreground">📍</div>
			<p class="text-lg font-medium">{emptyMessage}</p>
			<p class="text-sm text-muted-foreground">Try broadening your search criteria</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each places as place (place.id)}
				<PlaceCard
					{place}
					isFavorite={favoriteIds.includes(place.id)}
					{onFavoriteToggle}
					onClick={onPlaceClick}
				/>
			{/each}
		</div>
	{/if}

	{#if places.length > 0 && !isLoading}
		<div class="flex justify-center pt-6">
			<Button>
				Load more
			</Button>
		</div>
	{/if}
</div>
