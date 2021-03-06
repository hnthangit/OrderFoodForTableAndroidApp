USE [master]
GO
/****** Object:  Database [RestaurantAppDb]    Script Date: 12/19/2019 8:39:06 AM ******/
CREATE DATABASE [RestaurantAppDb]
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [RestaurantAppDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [RestaurantAppDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [RestaurantAppDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [RestaurantAppDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET  ENABLE_BROKER 
GO
ALTER DATABASE [RestaurantAppDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET ALLOW_SNAPSHOT_ISOLATION ON 
GO
ALTER DATABASE [RestaurantAppDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [RestaurantAppDb] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [RestaurantAppDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [RestaurantAppDb] SET RECOVERY FULL 
GO
ALTER DATABASE [RestaurantAppDb] SET  MULTI_USER 
GO
ALTER DATABASE [RestaurantAppDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [RestaurantAppDb] SET DB_CHAINING OFF 
GO
USE [RestaurantAppDb]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 12/19/2019 8:39:06 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Bills]    Script Date: 12/19/2019 8:39:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bills](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Flag] [int] NULL,
	[CreatorId] [int] NULL,
	[CreateTime] [datetime2](7) NULL,
	[TableId] [bigint] NOT NULL,
	[TotalPayment] [bigint] NULL,
 CONSTRAINT [PK_Bills] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Foods]    Script Date: 12/19/2019 8:39:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Foods](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Price] [decimal](18, 0) NULL,
	[Image] [nvarchar](50) NULL,
 CONSTRAINT [PK_Foods] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Orders]    Script Date: 12/19/2019 8:39:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[BillId] [bigint] NOT NULL,
	[FoodId] [bigint] NOT NULL,
	[Quantity] [int] NULL,
	[PaymentAmount] [bigint] NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[BillId] ASC,
	[FoodId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Tables]    Script Date: 12/19/2019 8:39:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tables](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Flag] [int] NULL,
 CONSTRAINT [PK_Tables] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Users]    Script Date: 12/19/2019 8:39:07 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](max) NULL,
	[Password] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20191116030838_CreateDB', N'2.2.6-servicing-10079')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20191129124102_Food', N'2.2.6-servicing-10079')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20191130123200_update db', N'2.2.6-servicing-10079')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20191201060557_food2', N'2.2.6-servicing-10079')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20191202143023_remove flag from orders', N'2.2.6-servicing-10079')
SET IDENTITY_INSERT [dbo].[Bills] ON 

INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (36, 1, 3, CAST(N'2019-12-08 00:00:00.0000000' AS DateTime2), 1, 7000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (37, 1, 1, CAST(N'2019-12-08 00:00:00.0000000' AS DateTime2), 5, 31000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (38, 1, 1, CAST(N'2019-12-08 00:00:00.0000000' AS DateTime2), 4, 70000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (39, 1, 2, CAST(N'2019-12-08 00:00:00.0000000' AS DateTime2), 1, 93000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (40, 1, 3, CAST(N'2019-12-09 00:00:00.0000000' AS DateTime2), 1, 124000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (51, 1, 3, CAST(N'2019-12-09 00:00:00.0000000' AS DateTime2), 2, 49000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (65, 1, 2, CAST(N'2019-12-09 00:00:00.0000000' AS DateTime2), 3, 30000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (79, 1, 1, CAST(N'2019-12-09 00:00:00.0000000' AS DateTime2), 3, 1759000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (85, 0, 3, CAST(N'2019-12-09 00:00:00.0000000' AS DateTime2), 3, 5275000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (86, 1, 2, CAST(N'2019-12-09 00:00:00.0000000' AS DateTime2), 1, 14000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (87, 1, 1, CAST(N'2019-12-09 00:00:00.0000000' AS DateTime2), 1, 1102000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (88, 1, 3, CAST(N'2019-12-09 00:00:00.0000000' AS DateTime2), 2, 35000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (89, 1, 2, CAST(N'2019-12-10 00:00:00.0000000' AS DateTime2), 1, 259000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (90, 1, 2, CAST(N'2019-12-10 00:00:00.0000000' AS DateTime2), 1, 80000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (91, 1, 1, CAST(N'2019-12-10 00:00:00.0000000' AS DateTime2), 1, 60000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (92, 1, 2, CAST(N'2019-12-10 00:00:00.0000000' AS DateTime2), 6, 3528000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (93, 1, 2, CAST(N'2019-12-11 00:00:00.0000000' AS DateTime2), 1, 146000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (94, 1, 3, CAST(N'2019-12-11 00:00:00.0000000' AS DateTime2), 1, 24000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (95, 1, 2, CAST(N'2019-12-11 00:00:00.0000000' AS DateTime2), 5, 1757000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (96, 0, 3, CAST(N'2019-12-11 00:00:00.0000000' AS DateTime2), 3, 0)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (97, 0, 2, CAST(N'2019-12-11 00:00:00.0000000' AS DateTime2), 8, 1573000)
INSERT [dbo].[Bills] ([Id], [Flag], [CreatorId], [CreateTime], [TableId], [TotalPayment]) VALUES (98, 0, 2, CAST(N'2019-12-19 00:00:00.0000000' AS DateTime2), 1, 0)
SET IDENTITY_INSERT [dbo].[Bills] OFF
SET IDENTITY_INSERT [dbo].[Foods] ON 

INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (1, N'Nhân ngư vượt đại dương', CAST(7000 AS Decimal(18, 0)), N'image/canhca.jpg')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (2, N'Thiếu nữ trên cánh đồng', CAST(5000 AS Decimal(18, 0)), N'image/comtrang.jpg')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (3, N'Thiếu nữ múa lửa', CAST(10000 AS Decimal(18, 0)), N'image/comchien.jpg')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (4, N'Ngưu ma vương tắm sông Hương', CAST(15000 AS Decimal(18, 0)), N'image/canhthitbo.jpg')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (5, N'Bún bò Huế', CAST(20000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (6, N'Vũ nữ vườn hồng', CAST(50000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (7, N'Mây trắng vườn hồng', CAST(70000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (8, N'Ngưu ma vương hút thuốc', CAST(320000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (9, N'Trư bát giới đại náo chuồng gà', CAST(60000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (10, N'Rồng xanh vượt đại dương', CAST(32000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (11, N'Thái dương hạ vân san', CAST(20000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (12, N'Máu nhuộm bến Thượng Hải', CAST(150000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (13, N'Hậu duệ mặt trời', CAST(15000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (14, N'Bảo ngọc đua sắc', CAST(50000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (15, N'Táo quân lội vạc dầu', CAST(125000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (16, N'Thủy quái đội lốt hoàng bào', CAST(100000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (17, N'Lệ thủy dạ minh châu', CAST(50000 AS Decimal(18, 0)), N'string')
INSERT [dbo].[Foods] ([Id], [Name], [Price], [Image]) VALUES (18, N'Khoái lạc thủy cung', CAST(60000 AS Decimal(18, 0)), N'string')
SET IDENTITY_INSERT [dbo].[Foods] OFF
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (36, 1, 1, 7000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (37, 1, 3, 21000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (37, 2, 2, 10000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (38, 5, 1, 20000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (38, 6, 1, 50000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (39, 1, 9, 63000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (39, 2, 6, 30000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (40, 1, 2, 14000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (40, 2, 2, 10000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (40, 3, 4, 40000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (40, 4, 4, 60000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (51, 1, 7, 49000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (65, 3, 3, 30000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (79, 1, 3, 21000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (79, 2, 5, 25000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (79, 4, 7, 105000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (79, 5, 3, 60000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (79, 7, 4, 280000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (79, 8, 3, 960000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (79, 9, 3, 180000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (79, 10, 4, 128000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 1, 10, 70000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 2, 5, 25000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 3, 7, 70000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 8, 6, 1920000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 9, 6, 360000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 11, 7, 140000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 13, 6, 90000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 14, 7, 350000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 15, 6, 750000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 16, 7, 700000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 17, 4, 200000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (85, 18, 10, 600000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (86, 1, 2, 14000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (87, 1, 6, 42000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (87, 2, 5, 25000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (87, 3, 5, 50000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (87, 4, 3, 45000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (87, 16, 5, 500000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (87, 17, 4, 200000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (87, 18, 4, 240000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (88, 1, 5, 35000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (89, 1, 5, 35000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (89, 10, 7, 224000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (90, 3, 8, 80000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (91, 5, 3, 60000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 1, 6, 42000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 2, 4, 20000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 3, 3, 30000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 4, 3, 45000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 5, 4, 80000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 6, 3, 150000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 7, 4, 280000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 8, 4, 1280000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 9, 3, 180000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 10, 3, 96000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 11, 3, 60000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 12, 2, 300000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 13, 3, 45000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 14, 3, 150000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 15, 2, 250000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 16, 3, 300000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 17, 2, 100000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (92, 18, 2, 120000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (93, 1, 3, 21000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (93, 2, 3, 15000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (93, 3, 5, 50000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (93, 4, 4, 60000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (94, 1, 2, 14000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (94, 2, 2, 10000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (95, 1, 6, 42000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (95, 2, 5, 25000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (95, 3, 6, 60000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (95, 4, 6, 90000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (95, 5, 5, 100000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (95, 12, 7, 1050000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (95, 13, 6, 90000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (95, 14, 6, 300000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (97, 1, 14, 98000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (97, 15, 7, 875000)
INSERT [dbo].[Orders] ([BillId], [FoodId], [Quantity], [PaymentAmount]) VALUES (97, 18, 10, 600000)
SET IDENTITY_INSERT [dbo].[Tables] ON 

INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (1, 0)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (2, 0)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (3, 1)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (4, 0)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (5, 0)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (6, 0)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (7, 0)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (8, 1)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (9, 0)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (10, 0)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (11, 0)
INSERT [dbo].[Tables] ([Id], [Flag]) VALUES (12, 0)
SET IDENTITY_INSERT [dbo].[Tables] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Username], [Password], [Image]) VALUES (1, N'thang', N'123', N'string')
INSERT [dbo].[Users] ([Id], [Username], [Password], [Image]) VALUES (2, N'minh', N'123', N'string')
INSERT [dbo].[Users] ([Id], [Username], [Password], [Image]) VALUES (3, N'hung', N'123', N'string')
SET IDENTITY_INSERT [dbo].[Users] OFF
/****** Object:  Index [IX_Bills_TableId]    Script Date: 12/19/2019 8:39:08 AM ******/
CREATE NONCLUSTERED INDEX [IX_Bills_TableId] ON [dbo].[Bills]
(
	[TableId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
GO
/****** Object:  Index [IX_Orders_FoodId]    Script Date: 12/19/2019 8:39:08 AM ******/
CREATE NONCLUSTERED INDEX [IX_Orders_FoodId] ON [dbo].[Orders]
(
	[FoodId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
GO
ALTER TABLE [dbo].[Bills]  WITH CHECK ADD  CONSTRAINT [FK_Bills_Tables_TableId] FOREIGN KEY([TableId])
REFERENCES [dbo].[Tables] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Bills] CHECK CONSTRAINT [FK_Bills_Tables_TableId]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Bills_BillId] FOREIGN KEY([BillId])
REFERENCES [dbo].[Bills] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Bills_BillId]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Foods_FoodId] FOREIGN KEY([FoodId])
REFERENCES [dbo].[Foods] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Foods_FoodId]
GO
USE [master]
GO
ALTER DATABASE [RestaurantAppDb] SET  READ_WRITE 
GO
