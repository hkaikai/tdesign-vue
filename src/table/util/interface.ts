import { BaseTableCol, RenderType, PrimaryTableCol, SortType, TdPrimaryTableProps } from '../type';
import primaryTableProps from '../primary-table-props';

export type CustomRenderName = 'title' | 'cell' | 'render';

export type CustomData = {
  type: RenderType;
  func: CustomRenderName;
};

export interface TdInstance extends Vue {
  cellData?: {
    type: string;
    col: BaseTableCol;
    colIndex: number;
    row?: object;
    rowIndex?: number;
    customData: CustomData;
    customRender: Function;
  };
};

export interface CellParams {
  col: BaseTableCol;
  colIndex: number;
  row?: object;
  rowIndex?: number;
  record?: object;
};
export interface CellData {
  type: string;
  col: BaseTableCol;
  colIndex: number;
  row?: object;
  rowIndex?: number;
  customData: CustomData;
  customRender: Function;
};

export const EventNameWithKebab = [
  'row-hover',
  'row-mouseup',
  'row-mousedown',
  'row-click',
  'row-db-click',
];
export const ExpandProps = {
  expandedRowKeys: primaryTableProps.expandedRowKeys,
  expandedRow: primaryTableProps.expandedRow,
};

export type SortColumnAndOrder = {
  sortOrder: SortType;
  sortColumn: PrimaryTableCol;
};

export type RenderExpandRow = {
  row: any;
  rows: any;
  rowIndex: number;
  columns: TdPrimaryTableProps['columns'];
}