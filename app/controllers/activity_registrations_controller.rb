class ActivityRegistrationsController < ApplicationController
  before_action :find_activity, only: [:index, :new, :create]
  def index
    @activity_registrations = @activity.activity_registrations.all
  end

  def new
    @activity_registration = ActivityRegistration.new
  end

  def create

    @activity_registration = @activity.activity_registrations.find_or_create_by(:user_id => current_user.id)
    @activity_registration.user_id = current_user.id
    @activity_registration.user_name = current_user.username
    @activity_registration.activity_id = @activity.id
      if @activity_registration.save
        redirect_to @activity
      end
  end

  private
  def activity_registration_params
  	params.require(:activity_registration).permit(:user_id, :user_name, :activity_id)
  end
  def find_activity
    @activity = Activity.find(params[:activity_id])
  end
end

