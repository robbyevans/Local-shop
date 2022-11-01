class User < ApplicationRecord
    has_secure_password
     validates :email, presence: true, uniqueness: true
     validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
     validates :full_name, presence: true
     validates :password,
               length: { minimum: 6 },
               if:  -> { new_record? || !password.nil? }

    validates :role, presence: true
    has_many :stores
    validates :role, presence: true
    has_many :admins
    has_many :clerks, through: :admins
    has_many :items, through: :clerks
    has_many :requested_items, through: :clerks
end
