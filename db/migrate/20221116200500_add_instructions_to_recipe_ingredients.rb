class AddInstructionsToRecipeIngredients < ActiveRecord::Migration[6.1]
  def change
    add_column :recipe_ingredients, :instructions, :string
  end
end
