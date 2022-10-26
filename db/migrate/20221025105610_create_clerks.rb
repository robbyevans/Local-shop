class CreateClerks < ActiveRecord::Migration[6.1]
  def change
    create_table :clerks do |t|
      t.string :full_name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
