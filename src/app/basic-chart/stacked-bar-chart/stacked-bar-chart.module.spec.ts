import { StackedBarChartModule } from './stacked-bar-chart.module';

describe('StackedBarChartModule', () => {
  let stackedBarChartModule: StackedBarChartModule;

  beforeEach(() => {
    stackedBarChartModule = new StackedBarChartModule();
  });

  it('should create an instance', () => {
    expect(stackedBarChartModule).toBeTruthy();
  });
});
