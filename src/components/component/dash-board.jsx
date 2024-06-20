"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"

export function DashBoard() {
  return (
    (<div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
          prefetch={false}>
          <DumbbellIcon className="w-6 h-6" />
          <span>Fitbox</span>
        </Link>
        <nav
          className="hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-auto">
          <Link href="#" className="font-bold" prefetch={false}>
            Miembros
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Clases
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Instructores
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Reportes
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="rounded-full ml-auto">
          <img
            src="/placeholder.svg"
            width="32"
            height="32"
            className="rounded-full"
            alt="Avatar" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </header>
      <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Miembros</CardTitle>
              <UsersIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+5.2% desde el mes pasado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Clases Programadas</CardTitle>
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">+3 desde la semana pasada</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
              <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Instructores</CardTitle>
              <UsersIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Asistencia a Clases</CardTitle>
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <LineChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Nuevos Miembros</CardTitle>
              <UsersIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <BarChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Miembros Activos</CardTitle>
              <UsersIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Membresía</TableHead>
                    <TableHead>Última Visita</TableHead>
                    <TableHead className="text-right">Estatus</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell>Premium</TableCell>
                    <TableCell>Ayer</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="success">Activo</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jane Smith</TableCell>
                    <TableCell>Básica</TableCell>
                    <TableCell>Hace 3 días</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="success">Activo</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bob Johnson</TableCell>
                    <TableCell>Premium</TableCell>
                    <TableCell>Hace 2 semanas</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="warning">Inactivo</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sarah Lee</TableCell>
                    <TableCell>Básica</TableCell>
                    <TableCell>Hace 1 mes</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="danger">Cancelado</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>)
  );
}

function BarChart(props) {
  return (
    (<div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data" />
    </div>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function DollarSignIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>)
  );
}


function DumbbellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14.4 14.4 9.6 9.6" />
      <path
        d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path
        d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>)
  );
}


function LineChart(props) {
  return (
    (<div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application" />
    </div>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
