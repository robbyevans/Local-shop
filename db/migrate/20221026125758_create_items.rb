class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :quantity
      t.integer :inStock
      t.integer :spoilt
      t.integer :BuyingPrice
      t.integer :SellingPrice
      t.boolean :paid

      t.timestamps
    end
  end
end
