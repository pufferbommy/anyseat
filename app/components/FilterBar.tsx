import { Switch } from '@heroui/react';
import { Wifi, Zap } from 'lucide-react';

interface FilterBarProps {
  types: string[];
  selectedTypes: string[];
  onTypeChange: (type: string) => void;
  wifiAvailable: boolean;
  onWifiChange: (value: boolean) => void;
  powerOutlets: boolean;
  onPowerOutletsChange: (value: boolean) => void;
}

export default function FilterBar({
  types,
  selectedTypes,
  onTypeChange,
  wifiAvailable,
  onWifiChange,
  powerOutlets,
  onPowerOutletsChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex flex-wrap gap-2">
        {types.map((type) => {
          const isSelected = selectedTypes.includes(type);
          return (
            <button
              key={type}
              type="button"
              onClick={() => onTypeChange(type)}
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                isSelected
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <Switch
          isSelected={wifiAvailable}
          onValueChange={onWifiChange}
          thumbIcon={<Wifi size={14} />}
          size="sm"
        >
          <span className="text-sm">Wi-Fi</span>
        </Switch>
        <Switch
          isSelected={powerOutlets}
          onValueChange={onPowerOutletsChange}
          thumbIcon={<Zap size={14} />}
          size="sm"
        >
          <span className="text-sm">Power</span>
        </Switch>
      </div>
    </div>
  );
}
