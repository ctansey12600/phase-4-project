class RemoveInstructionsFromRecipeIngredients < ActiveRecord::Migration[6.1]
  def change
    remove_column :recipe_ingredients, :instructions, :string
  end
end
