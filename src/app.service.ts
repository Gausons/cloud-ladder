import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getDepartmentList(config: any): Promise<any> {
    const departments = [];
    return departments;
  }

  async getGroupList(config: any): Promise<any> {
    const groups = [];
    return groups;
  }

  async getUserList(config: any): Promise<any> {
    const users = [];
    return users;
  }

  async getUser(index: any) {
    return {};
  }

  async createUser(user: any) {
    return user;
  }

  async updateUser(user: any) {
    return user;
  }

  async deleteUser(user: any) {
    return user;
  }

  async getDepartment(index: any) {
    return {};
  }

  async createDepartment(department: any) {
    return department;
  }

  async updateDepartment(department: any) {
    return department;
  }

  async deleteDepartment(department: any) {
    return department;
  }

  async getGroup(index: any) {
    return {};
  }

  async createGroup(group: any) {
    return group;
  }

  async updateGroup(group: any) {
    return group;
  }

  async deleteGroup(group: any) {
    return group;
  }
}
