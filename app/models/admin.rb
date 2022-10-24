class Admin < ApplicationRecord
    validates :full_name, presence: true
    validates :email, presence: true
    validates :store, presence: true
    belongs_to :merchant_user
end
