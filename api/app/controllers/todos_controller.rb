class TodosController < ApplicationController
  protect_from_forgery

  def index
    todos = Todo.all
    render json: todos
  end

  def new
    @todos = Todo.new
  end

  def create
    text = params['text']
    Todo.create({text: text})
    # if  @todos.save
    #     redirect_to root_path
    # else
    #   render :new
    # end
    render json: Todo.all
  end

  def destroy
    @todos.destroy
    redirect_to root_path
  end
end
