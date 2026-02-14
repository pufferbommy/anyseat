<script lang="ts" module>
	export interface FilterOptions {
		searchQuery: string;
		selectedTypes: string[];
		selectedFeatures: string[];
		isOpenOnly: boolean;
		sortBy: "distance" | "rating" | "name";
	}

	export interface SearchFilterProps {
		filters: FilterOptions;
		onFilterChange: (filters: FilterOptions) => void;
		availableTypes?: string[];
		availableFeatures?: string[];
	}
</script>

<script lang="ts">
  import { Button } from "./ui/button";
	import * as InputGroup from "$lib/components/ui/input-group";
	import { Search } from "@lucide/svelte"
    import { Badge } from "./ui/badge";

	let {
		filters,
		onFilterChange,
		availableTypes = ["cafe", "library", "coworking", "public-space"],
		availableFeatures = ["wifi", "power", "quiet", "food", "parking", "outdoor"],
	}: SearchFilterProps = $props();

	function handleSearchChange(e: Event) {
		const target = e.target as HTMLInputElement;
		onFilterChange({ ...filters, searchQuery: target.value });
	}

	function toggleType(type: string) {
		const newTypes = filters.selectedTypes.includes(type)
			? filters.selectedTypes.filter((t) => t !== type)
			: [...filters.selectedTypes, type];
		onFilterChange({ ...filters, selectedTypes: newTypes });
	}

	function toggleFeature(feature: string) {
		const newFeatures = filters.selectedFeatures.includes(feature)
			? filters.selectedFeatures.filter((f) => f !== feature)
			: [...filters.selectedFeatures, feature];
		onFilterChange({ ...filters, selectedFeatures: newFeatures });
	}

	function toggleOpenOnly() {
		onFilterChange({ ...filters, isOpenOnly: !filters.isOpenOnly });
	}

	function handleSortChange(e: Event) {
		const target = e.target as HTMLSelectElement;
		onFilterChange({
			...filters,
			sortBy: target.value as FilterOptions["sortBy"],
		});
	}

	function clearFilters() {
		onFilterChange({
			searchQuery: "",
			selectedTypes: [],
			selectedFeatures: [],
			isOpenOnly: false,
			sortBy: "distance",
		});
	}

	const hasActiveFilters =
		filters.searchQuery ||
		filters.selectedTypes.length > 0 ||
		filters.selectedFeatures.length > 0 ||
		filters.isOpenOnly;
</script>
<div class="space-y-4 rounded-lg border bg-card p-4">
	<InputGroup.Root>
		<InputGroup.Input value={filters.searchQuery} oninput={handleSearchChange} placeholder="Search places..." />
		<InputGroup.Addon>
			<Search />
		</InputGroup.Addon>
	</InputGroup.Root>

	<div class="space-y-2">
		<label class="text-sm font-medium">Type</label>
		<div class="flex flex-wrap gap-2">
			{#each availableTypes as type}
				<Badge
					variant={filters.selectedTypes.includes(type) ? undefined : "outline"}
					onclick={() => toggleType(type)}
				>
					{type}
				</Badge>
			{/each}
		</div>
	</div>

	<div class="space-y-2">
		<label class="text-sm font-medium">Features</label>
		<div class="flex flex-wrap gap-2">
			{#each availableFeatures as feature}
				<Badge
					variant={filters.selectedFeatures.includes(feature) ? undefined : "outline"}
					onclick={() => toggleFeature(feature)}
				>
					{feature}
				</Badge>
			{/each}
		</div>
	</div>

	<div class="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
		<div class="flex items-center gap-4">
			<label class="flex items-center gap-2 text-sm">
				<input
					type="checkbox"
					checked={filters.isOpenOnly}
					onchange={toggleOpenOnly}
					class="h-4 w-4 rounded border-primary"
				/>
				<span>Open now</span>
			</label>

			<div class="flex items-center gap-2">
				<label class="text-sm text-muted-foreground">Sort by:</label>
				<select
					class="rounded-md border bg-background px-2 py-1 text-sm focus:border-primary focus:outline-none"
					value={filters.sortBy}
					onchange={handleSortChange}
				>
					<option value="distance">Distance</option>
					<option value="rating">Rating</option>
					<option value="name">Name</option>
				</select>
			</div>
		</div>

		{#if hasActiveFilters}
			<button
				class="text-sm text-muted-foreground hover:text-foreground"
				onclick={clearFilters}
			>
				Clear all
			</button>
		{/if}
	</div>
</div>
