class ChangeColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :admins, :store, :store_id
  end
end
