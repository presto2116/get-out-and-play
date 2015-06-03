class ActivitiesController < ApplicationController

# BACKBONE CONTROLLER
# 	def index
# 		if params[:id] == 1
# 			@activities = Activity.where(id: 1)
# 		else
# 			@activities = Activity.all
# 		end
# 		render status: 200, json: @activities.to_json
# 	end

# 	def show
# 		@activity = Activity.find(params[:id])
# 		render status: 200, json: @activity.to_json
# 	end

# 	def new
# 		@activity = Activity.new
# 	end

# 	def create
# 		@activity = Activity.new(activity_params)
# 		if @activity.save
# 			render json: @activity.to_json, status: 200
# 		end
# 	end

# 	def update
# 		@activity = Activity.find(params[:id])
# 		if @activity.update(activity_params)
# 			render json: @activity.to_json, status: 200
# 		end
# 	end

# 	def destroy
# 		@activity = Activity.find(params[:id])
# 		if @activity.destroy
# 			render json: @activity.to_json, status: 200
# 		end
# 	end

# 	private
# 		def activity_params
# 			params.require(:activity).permit(:user_id, :creator, :title, :date, :location, :description)
# 		end
# end

	def index
			@activities = Activity.all
	end

	def show
		@activity = Activity.find(params[:id])
		@activity_registration = @activity.activity_registrations.all
	end

	def new
		@activity = Activity.new
	end

	def create
		@activity = Activity.new(activity_params)
		@activity.creator = current_user.email
		if @activity.save
			redirect_to root_path
		end
	end
	def edit
		@activity = Activity.find(params[:id])
	end
	def update
		@activity = Activity.find(params[:id])
		if @activity.update(activity_params)
			redirect_to root_path
		end
	end

	def destroy
		@activity = Activity.find(params[:id])
		if @activity.destroy
			redirect_to root_path
		end
	end

	private
		def activity_params
			params.require(:activity).permit(:user_id, :creator, :title, :date, :location, :description)
		end
end