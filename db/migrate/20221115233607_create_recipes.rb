class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.integer :time_required
      t.integer :drink_id

      t.timestamps
    end
  end
end
