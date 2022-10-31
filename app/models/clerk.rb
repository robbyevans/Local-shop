class Clerk < ApplicationRecord
    belongs_to :admin
    has_secure_password
    has_many :items
    has_many :requested_items
end
