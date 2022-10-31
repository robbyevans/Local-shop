class User < ApplicationRecord
    has_secure_password
    # validates :email, presence: true, uniqueness: true
    # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    # validates :full_name, presence: true
    # validates :password,
    #           length: { minimum: 6 },
    #           if:  -> { new_record? || !password.nil? }

<<<<<<< HEAD
    validates :role, presence: true
    has_many :stores
=======
    # validates :role, presence: true
>>>>>>> c85c63a04b5f9684df36f48dc84ef681b6ef1936
    has_many :admins
end
