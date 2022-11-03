class AddColumnClerkIdToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :clerk_id, :integer
  end
end
