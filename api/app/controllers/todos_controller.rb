class TodosController < ApplicationController
  protect_from_forgery
  def index
    todos = Todo.all
    render json: todos
  end

  def create
    new_todo = params.permit(:text, :done)
    Todo.create(new_todo)
    render json: Todo.all
  end

  def delete
    id = params[:id]
    Todo.find(id).delete
    render json: Todo.all
  end
end
