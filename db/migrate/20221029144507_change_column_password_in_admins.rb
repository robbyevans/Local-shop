class ChangeColumnPasswordInAdmins < ActiveRecord::Migration[6.1]
  def change
    rename_column :admins, :password, :password_digest
  end
end
