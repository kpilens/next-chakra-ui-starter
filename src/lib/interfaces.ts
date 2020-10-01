import { UiSchema } from '@rjsf/core';

export interface IPageLayout {
	children: React.ReactNode;
	wrapperBox: string | number;
	isDefaultHeader?: boolean;
}

/**
 * This interface is used with all radio Box elements and Headless radios that use custom components
 */
export interface IRadioBoxChildren {
	name: string;
	fieldName: string;
	icon?: string;
	tip?: string;
}
export interface IIndicatorProps {
	indicatorName: string;
	indicatorType: string;
	metricType: 'increase' | 'decrease' | undefined;
	metricNumber: string | number;
	analyticName?: string;
}

export interface IWizardFormProps {
	useFormStep: React.Dispatch<React.SetStateAction<string>>;
	// useActivityStep: React.Dispatch<React.SetStateAction<string>>;
}

export interface IActivityWizardFormProps {
	useFormStep: React.Dispatch<React.SetStateAction<string>>;
	useActivityStep: React.Dispatch<React.SetStateAction<string>>;
}

export interface ActivityFormProps {
	useFormStep?: React.Dispatch<React.SetStateAction<string>>;
	useActivityStep: React.Dispatch<React.SetStateAction<string>>;
}

export interface IProjectFormProps {
	useFormStep: (...args: any) => React.Dispatch<React.SetStateAction<string>> | Promise<void>;
}

/**
 * Form Builder Interface props
 */
export interface FieldOptionProps {
	field: string;
	fieldName: string; // Use this so users can define variable field names
	fieldType: string;
	// fieldTypeName?: string;
	description: string;
	formSchema: Record<any, string>;
	uiSchema: UiSchema;
}

export interface FormFieldContainerProps {
	options: FieldOptionProps;
	isCatalog: boolean;
	ref?: HTMLElement | any | undefined;
}
