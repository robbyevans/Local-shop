class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :full_name
      t.string :email
      t.string :password
      t.string :store

      t.timestamps
    end
  end
end
