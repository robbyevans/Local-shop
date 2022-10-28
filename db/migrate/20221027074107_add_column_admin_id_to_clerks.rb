class AddColumnAdminIdToClerks < ActiveRecord::Migration[6.1]
  def change
    add_column :clerks, :admin_id, :integer
  end
end
