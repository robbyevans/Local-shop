class AddColumnClerkIdToRequestedItems < ActiveRecord::Migration[6.1]
  def change
    add_column :requested_items, :clerk_id, :integer
  end
end
