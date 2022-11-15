class CreateUserIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :user_ingredients do |t|
      t.integer :amount_owned
      t.integer :user_id
      t.integer :ingredient_id
      t.timestamps
    end
  end
end
