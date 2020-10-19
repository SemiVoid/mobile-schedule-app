import { Modals } from '../../../redux';

export interface PageContainerProps {
  pageTitle: string;
  fullscreen?: boolean;
  modal?: Modals;
  footer?: React.ReactNode;
}

export interface PageHeaderProps {
  pageTitle: string;
  condense?: boolean;
  modal?: Modals;
}

export interface PageContentProps {
  pageTitle: string;
  fullscreen?: boolean;
  modal?: Modals;
  footer?: React.ReactNode;
}
