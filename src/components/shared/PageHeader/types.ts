import { Modals } from '../../../redux';

export interface PageHeaderProps {
  headerTitle: string;
  headerColor?: string;
  condense?: boolean;
  modal?: Modals;
  backButton?: boolean;
}
