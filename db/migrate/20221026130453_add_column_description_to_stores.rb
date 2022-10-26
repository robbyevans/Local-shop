class AddColumnDescriptionToStores < ActiveRecord::Migration[6.1]
  def change
    add_column :stores, :description, :string
  end
end
