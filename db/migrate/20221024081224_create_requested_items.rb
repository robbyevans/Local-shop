class CreateRequestedItems < ActiveRecord::Migration[6.1]
  def change
    create_table :requested_items do |t|
      t.string :clerk_name
      t.integer :quantity
      t.string :item_name
      t.date :date

      t.timestamps
    end
  end
end
