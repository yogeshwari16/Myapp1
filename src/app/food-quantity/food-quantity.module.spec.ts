import { FoodQuantityModule } from './food-quantity.module';

describe('FoodQuantityModule', () => {
  let foodQuantityModule: FoodQuantityModule;

  beforeEach(() => {
    foodQuantityModule = new FoodQuantityModule();
  });

  it('should create an instance', () => {
    expect(foodQuantityModule).toBeTruthy();
  });
});
