import { Modals } from '../../../redux';

export interface PageContainerProps {
  pageTitle: string;
  color?: string;
  fullscreen?: boolean;
  modal?: Modals;
  footer?: React.ReactNode;
}

export interface PageHeaderProps {
  pageTitle: string;
  color?: string;
  condense?: boolean;
  modal?: Modals;
}

export interface PageContentProps {
  pageTitle: string;
  color?: string;
  fullscreen?: boolean;
  modal?: Modals;
  footer?: React.ReactNode;
}
