class DropTableMerchantUsers < ActiveRecord::Migration[6.1]
  def change
    drop_table :merchant_users
  end
end
