import { MealCategoryModule } from './meal-category.module';

describe('MealCategoryModule', () => {
  let mealCategoryModule: MealCategoryModule;

  beforeEach(() => {
    mealCategoryModule = new MealCategoryModule();
  });

  it('should create an instance', () => {
    expect(mealCategoryModule).toBeTruthy();
  });
});
