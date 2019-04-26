import { FoodItemModule } from './food-item.module';

describe('FoodItemModule', () => {
  let foodItemModule: FoodItemModule;

  beforeEach(() => {
    foodItemModule = new FoodItemModule();
  });

  it('should create an instance', () => {
    expect(foodItemModule).toBeTruthy();
  });
});
