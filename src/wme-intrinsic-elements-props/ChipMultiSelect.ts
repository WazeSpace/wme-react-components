export interface WzChipMultiSelectProps {
  onChipSelected?(event: CustomEvent<{ value: string[] }>): void;
  maxSelected?: number;
}
