interface PageOneContainerProps {
  color: string;
}
interface PageOneContainerState {
  clickCounter: number;
}
interface PageOneViewProps
  extends PageOneContainerProps,
    PageOneContainerState {
  handleRefresh: () => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
}
interface CustomButtonProps {
  icon: string;
  onPress: () => void;
  disabled?: boolean;
}
