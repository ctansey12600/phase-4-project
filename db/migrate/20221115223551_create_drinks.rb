class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.string :name
      t.string :category
      t.string :image_url
      t.string :suggested_glass

      t.timestamps
    end
  end
end
