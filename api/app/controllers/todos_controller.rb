class TodosController < ApplicationController

  def index
    todos = Todo.all
    render json: todos
  end

  def new 
    @todos = Todo.new
  end

  def create
    @todos = Todo.new
  if  @todos.save
      redirect_to root_path
  else
    render :new
  end

  def destroy
    @todos.destroy
    redirect_to root_path
  end
end
