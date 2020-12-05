class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :passsword, length: { minimum: 6, allow_nil: true }
end
