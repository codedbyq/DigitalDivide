class ApplicationController < ActionController::Base
    
    helper_method :logged_in?, :current_user

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        unless current_user
            render json: ['Invalid Credentials'], status: 401
        end
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout
        current_user.reset_session_token!
        current_user = nil
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end
end
