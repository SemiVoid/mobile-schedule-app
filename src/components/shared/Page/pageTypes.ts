import { Modals } from '../../../redux';

export interface PageContainerProps extends PageContentProps {}

export interface PageContentProps extends PageHeaderProps {
  fullscreen?: boolean;
  footer?: React.ReactNode;
}

export interface PageHeaderProps {
  pageTitle: string;
  color?: string;
  condense?: boolean;
  modal?: Modals;
}
