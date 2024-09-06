import { Kpi as TKpi } from "../api/kpi/Kpi";

export const KPI_TITLE_FIELD = "kpiName";

export const KpiTitle = (record: TKpi): string => {
  return record.kpiName?.toString() || String(record.id);
};
