
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Download, PieChart } from "lucide-react";

const FinancialReports = () => {
  const monthlyData = [
    { month: "January", tithes: 15420, offerings: 3240, building: 2100, missions: 1680 },
    { month: "February", tithes: 16890, offerings: 3580, building: 2450, missions: 1920 },
    { month: "March", tithes: 18200, offerings: 4120, building: 2800, missions: 2240 },
    { month: "April", tithes: 17650, offerings: 3890, building: 2650, missions: 2080 },
    { month: "May", tithes: 19300, offerings: 4350, building: 3100, missions: 2450 },
  ];

  const expenseCategories = [
    { category: "Staff Salaries", amount: 45000, percentage: 52 },
    { category: "Building Maintenance", amount: 12000, percentage: 14 },
    { category: "Utilities", amount: 8500, percentage: 10 },
    { category: "Missions Support", amount: 10000, percentage: 12 },
    { category: "Ministry Programs", amount: 6000, percentage: 7 },
    { category: "Other", amount: 4500, percentage: 5 },
  ];

  const currentMonth = monthlyData[monthlyData.length - 1];
  const totalIncome = currentMonth.tithes + currentMonth.offerings + currentMonth.building + currentMonth.missions;
  const totalExpenses = expenseCategories.reduce((sum, category) => sum + category.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Reports</h1>
          <p className="text-gray-600 mt-2">Detailed financial analytics and reporting</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="2024">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Income</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${totalIncome.toLocaleString()}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Expenses</CardTitle>
            <DollarSign className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${totalExpenses.toLocaleString()}</div>
            <p className="text-xs text-red-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +3.2% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Net Income</CardTitle>
            <PieChart className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${(totalIncome - totalExpenses).toLocaleString()}</div>
            <p className="text-xs text-blue-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +18.7% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Budget Variance</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">+5.2%</div>
            <p className="text-xs text-purple-600">
              Above budget target
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Income Breakdown - {currentMonth.month}</CardTitle>
            <CardDescription>Revenue by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Tithes</span>
                <span className="text-sm font-bold">${currentMonth.tithes.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: `${(currentMonth.tithes / totalIncome) * 100}%` }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Offerings</span>
                <span className="text-sm font-bold">${currentMonth.offerings.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(currentMonth.offerings / totalIncome) * 100}%` }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Building Fund</span>
                <span className="text-sm font-bold">${currentMonth.building.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${(currentMonth.building / totalIncome) * 100}%` }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Missions</span>
                <span className="text-sm font-bold">${currentMonth.missions.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: `${(currentMonth.missions / totalIncome) * 100}%` }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expense Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
            <CardDescription>Monthly expenses by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenseCategories.map((expense, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{expense.category}</span>
                    <span className="text-sm font-bold">${expense.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full" 
                      style={{ width: `${expense.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Income Trends</CardTitle>
          <CardDescription>Income comparison over the last 5 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyData.map((month, index) => {
              const monthTotal = month.tithes + month.offerings + month.building + month.missions;
              return (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <span className="font-medium">{month.month}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold">${monthTotal.toLocaleString()}</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-church-primary h-2 rounded-full" 
                        style={{ width: `${(monthTotal / 30000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialReports;
