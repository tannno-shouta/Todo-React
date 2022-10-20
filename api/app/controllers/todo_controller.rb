class TodoController < ApplicationController
  lass ApplicationController < ActionController::Base
    before_action :authenticate_user! , except: [:index ,:show]
    before_action :common_processing, only: [:edit, :update,:show,:destroy]
    
    def index
      @todos = Todo.all.order("created_at DESC")
    end

    def new
      @todo = Todo.new
    end

    def create
      @todo = Todo.new(item_params)
      if  @todo.save
          redirect_to root_path
      else
        render :new
      end
    end

    def show
    end

    def edit
    end

    def update
      if @todo.update(todo_params)
        redirect_to todo_path
      else
        render :edit
      end
    end

    def destroy
      if current_user == @todo.user
      @todo.destroy
      redirect_to root_path
      end
    end

  private
    def todo_params
      params.require(:todo).permit( :todo, :done ).merge(user_id: current_user.id)
    end

    def common_processing
    @todo = Todo.find(params[:id])
    end



  end
end
