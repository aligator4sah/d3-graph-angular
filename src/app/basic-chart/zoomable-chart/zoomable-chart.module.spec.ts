import { ZoomableChartModule } from './zoomable-chart.module';

describe('ZoomableChartModule', () => {
  let zoomableChartModule: ZoomableChartModule;

  beforeEach(() => {
    zoomableChartModule = new ZoomableChartModule();
  });

  it('should create an instance', () => {
    expect(zoomableChartModule).toBeTruthy();
  });
});
