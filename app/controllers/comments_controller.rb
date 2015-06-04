class CommentsController < ApplicationController
before_action :find_activity, only: [:index, :new, :create]
  def index
    @comments = @activity.comments.all
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = @activity.comments.new(comment_params)
    @comment.user_name = current_user.username
    	if @comment.save
    		redirect_to @activity
    	end
  end

  private
  def comment_params
  	params.require(:comment).permit(:user_id, :user_name, :activity_id, :body )
  end
  def find_activity
    @activity = Activity.find(params[:activity_id])
  end
end