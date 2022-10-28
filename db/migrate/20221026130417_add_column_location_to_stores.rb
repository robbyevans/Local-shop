class AddColumnLocationToStores < ActiveRecord::Migration[6.1]
  def change
    add_column :stores, :location, :string
  end
end
