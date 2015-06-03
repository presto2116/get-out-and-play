class SessionsController < ApplicationController

  def authenticate
    # this method logs you in and returns you a single_access_token token for authentication.
    @user = User.find_for_authentication(:email => params[:user][:email])

    if @user && @user.valid_password?(params[:user][:password])
      render :json => {:user => {:email => @user.email, :id => @user.id, :firsname => @user.firstname, :lastname => @user.lastname, :team_id => @user.team_id, :singleAccessToken => @user.generate_access_token}}
    else
      render :json => {:errors => ["Nom d'utilisateur ou mot de passe invalide"]}, :status => 401
    end
  end
end